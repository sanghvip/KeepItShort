# KeepItShort
KeepItShort is focused on summarizing the input leveraging the emerging the frontend Technology(React.js) and NLP skills using Python. The text summarisation script is programmed with basic algorithms and techniques like term frequency, tokenizing sentences and scoring sentences. More work needs to be done on the backend and frontend. The project is still in the prelimirnary stage and far from POC, but the basic idea will get across through the project.

Technologies: Bootstrap, React.js, NLTK, Python, Django DRF

KeepItShort Summarized in 8 steps
------------------------
1. Sentence Tokenize and create the Frequency matrix of the words in each sentence
2. Calculate TermFrequency and generate a matrix
3. Creating table for documents per words
4. Calculate IDF and generate a matrix
5. Calculate TF-IDf and generate a matrix
6. Score the sentences
7. Find the threshold
8. Generate the summary

Steps to run the project
------------------------
1. Start the Django server
Navigate to KeepItShot\keepitshort directory in command prompt and type in command python manage.py runserver
Note: check that manage.py file exists before running the command.

2. Start serving the ReactUI
    Navigate to KeepItShort\keepitshort-react\frontend and type the following command
    npm install --- to install npm if you do not have it
    npm start --- start serving React UI
    
3. Next you can visit the UI at http://localhost:3000/ on your local PC

Sample view of the UI
-----------------------------
![UI for TextSummarizer](https://github.com/sanghvip/KeepItShort/blob/master/UI.PNG)
