#import undetected_chromedriver as uc
#from selenium import webdriver

#options = webdriver.ChromeOptions() 
#driver = uc.Chrome(options=options)
#driver.get('https://skidcrew.lol')
#input()
#print(driver.page_source)
import requests
print(requests.get('https://skidcrew.lol/style.css').text)