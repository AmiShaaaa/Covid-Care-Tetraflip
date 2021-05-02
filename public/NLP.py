from textblob import TextBlob
import sys
import tweepy
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import os
import nltk
import pycountry
import re
import string
from wordcloud import WordCloud, STOPWORDS
from PIL import Image
from langdetect import detect
from nltk.stem import SnowballStemmer
from sklearn.feature_extraction.text import CountVectorizer
import RelevancyAnalyzer

consumerKey = “”
consumerSecret = “”
accessToken = “”
accessTokenSecret = “”
auth = tweepy.OAuthHandler(consumerKey, consumerSecret)
auth.set_access_token(accessToken, accessTokenSecret)
api = tweepy.API(auth)


def percentage(part, whole):
    return 100 * float(part)/float(whole)


keyword = input(“keyword or hashtag“)
noOfTweet = int(input(“1000“))
tweets = tweepy.Cursor(api.search, q=keyword).items(noOfTweet)
relevant = 0
irrelevant = 0
polarity = 0
tweet_list = []
relevant_list = []
irrelevant_list = []
for tweet in tweets:
    tweet_list.append(tweet.text)
    analysis = TextBlob(tweet.text)
    score = RelevancyAnalyzer().polarity_scores(tweet.text)
    rel = score[‘rel’]
    irr = score[‘irr’]
    comp = score[‘compound’]
    polarity += analysis.sentiment.polarity

if rel > irr:
    relevant_list.append(tweet.text)
    relevant += 1
elif irr > rel:
    irrelevant_list.append(tweet.text)
    irrelevant += 1

elif pos == neg:
    neutral_list.append(tweet.text)
    neutral += 1
relevant = percentage(relevant, noOfTweet)
irrelevant = percentage(irrelevant, noOfTweet)
polarity = percentage(polarity, noOfTweet)
positive = format(positive, ‘.1f’)
negative = format(negative, ‘.1f’)
