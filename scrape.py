import requests
from bs4 import BeautifulSoup

URL = 'https://www.efinancialcareers.com/search/?q=accountant&countryCode=US&radius=50&radiusUnit=mi&page=1&pageSize=20&currencyCode=USD&language=en'
page = requests.get(URL)

soup = BeautifulSoup(page.content, 'html.parser')
results = soup.find(id='ResultsContainer')
print(results.prettify())
elems = results.find_all('section', class_='card-content')
for elem in elems:
    print(elem, end='\n'*2)
for elem in elems:
    # Each job_elem is a new BeautifulSoup object.
    # You can use the same methods on it as you did before.
    brand_elem = elem.find('h2', class_='brand')
    price_elem = elem.find('div', class_='price')
    delivery_elem = elem.find('div', class_='delivery')
    model_elem = elem.find('div', class_='model')
    summary_elem = elem.find('div', class_='summary')
    posted_elem = elem.find('div', class_='posted')
    print(brand_elem)
    print(price_elem)
    print(delivery_elem)
    print(model_elem)
    print(summary_elem)
    print(posted_elem)
print()
for prod_elem in elems:
    brand_elem = prod_elem.find('h2', class_='brand')
    price_elem = prod_elem.find('div', class_='price')
    deliery_elem = prod_elem.find('div', class_='delivery')
    model_elem = prod_elem.find('div', class_='model')
    summary_elem = prod_elem.find('div', class_='summary')
    posted_elem = prod_elem.find('div', class_='posted')
    print(brand_elem.text)
    print(price_elem.text)
    print(delivery_elem.text)
    print(model_elem.text)
    print(summary_elem.text)
    print(posted_elem.text)
    print()
for web_elem in elems:
    brand_elem = web_elem.find('h2', class_='brand')
    price_elem = web_elem.find('div', class_='price')
    delivery_elem = web_elem.find('div', class_='delivery')
    model_elem = web_elem.find('h2', class_='model')
    summary_elem = web_elem.find('div', class_='summary')
    posted_elem = web_elem.find('div', class_='posted')
    if None in (brand_elem, price_elem, delivery_elem,model_elem,summary_elem,posted_elem):
        continue
    print(brand_elem.text.strip())
    print(price_elem.text.strip())
    print(delivery_elem.text.strip())
    print(model_elem.text.strip())
    print(summary_elem.text.strip())
    print(posted_elem.text.strip())
print()
python_prod = results.find_all('h2',string=lambda text: 'python' in text.lower())
print(len(python_prod))
python_prod = results.find_all('h2',
                               string=lambda text: "python" in text.lower())
for p_prod in python_prod:
    link = p_prod.find('a')['href']
    print(p_prod.text.strip())
    print(f"find here: {link}\n")