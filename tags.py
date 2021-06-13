from urllib.request import urlopen
from bs4 import BeautifulSoup

# specify the url
url = 'https://www.walmart.com/search/?query=laptops'
# Connect to the website and return the html to the variable ‘page’
try:
    page = urlopen(url)
except:
    print("Error opening the URL")

# parse the html using beautiful soup and store in variable `soup`
soup = BeautifulSoup(page, 'html.parser')

# Take out the <div> of name and get its value
content = soup.find('div', {"class": "wpa-brand-product-card","class": "tile-content", "class": "tile-title" })

article = ''
for i in content.findAll('div class="TempoItemTile-Title css-truncation"'):
    article = article + ' ' +  i.text
print(article)

# Saving the scraped text
with open('scraped_text.txt', 'w') as file:
    file.write(article)