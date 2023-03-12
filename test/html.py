import undetected_chromedriver as uc
from selenium import webdriver

options = webdriver.ChromeOptions() 
driver = uc.Chrome(options=options)
driver.get('https://blunt.tk')
input()
print(driver.page_source)