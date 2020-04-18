const needle = require('needle');
const fs = require('fs');

(async () => {
  const responseData = await needle('get', 'https://raw.githubusercontent.com/benoitalvarez/Covid-19-QBox-ChatbotModel/master/Models/Rasa/COVID-19%20FAQ%20RASA.json');
  const data = JSON.parse(responseData.body)

  const newExamples = data.rasa_nlu_data.common_examples.map(ex => {
    if (ex.intent.startsWith("faq_")) {
      ex.intent = ex.intent.replace("faq_", "faq/");
    }
    if (ex.intent.startsWith("company_")) {
      ex.intent = ex.intent.replace("company_", "company/");
    }

    return ex;
  });

  data.rasa_nlu_data.common_examples = newExamples;

  const totalWrite = fs.writeFile('./temp/converted_data.json', JSON.stringify(data, null, 2), () => { });

  return totalWrite;
})();
