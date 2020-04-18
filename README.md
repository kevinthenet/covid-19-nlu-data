# covid-19-nlu-data

## Description
Converted [JSON training data](https://github.com/benoitalvarez/Covid-19-QBox-ChatbotModel/blob/master/Models/Rasa/COVID-19%20FAQ%20RASA.json) to Markdown and changed to use new Rasa experimental [Retrieval Actions](https://rasa.com/docs/rasa/core/retrieval-actions/).

## Requirements
* [Rasa](https://rasa.com/docs/rasa/user-guide/installation/) installation

### Included intents
* None (triggers default fallback)
* smalltalk_human
* faq
    * distancing
    * symptoms
    * vaccine
    * vulnerable
    * testing
    * supplies
    * flu
    * howmany
    * masks
    * timescale
    * spread
    * handwashing
    * curve
    * whatisit
    * origin
* company
    * open
    * wfh
    * mitigation
    * deliveries


## How to use this repo
* `npm start` if you'd like the most recent changes from the source repo (not maintained by me)
* Add the following to your `config.yml`:
    ```yml
    # config.yml

    pipeline:
    # ... rest of pipeline
    - name: "ResponseSelector"
        retrieval_intents: faq
    - name: "ResponseSelector"
        retrieval_intents: company
    ```
* Copy over the files from `data/` into your rasa project directory
    > alternatively, you can copy `temp/covid19_data.md` if you wanted all training data from the [source](https://github.com/benoitalvarez/Covid-19-QBox-ChatbotModel/blob/master/Models/Rasa/COVID-19%20FAQ%20RASA.json)
* Add your story files in `data/responses.md`
* `rasa train`


[Link to source repo](https://github.com/benoitalvarez/Covid-19-QBox-ChatbotModel)
