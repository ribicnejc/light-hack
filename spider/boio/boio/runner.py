import os
from utils import utils
from scrapy import cmdline

f = open("utils/urls.log", "r")
scraped_num = -1
while True:
    id = f.readline()
    if not id:
        f.close()
        break
    if utils.is_already_scraped(id):
        continue

    # cmdline.execute("scrapy crawl spider -a id=aa0003".split())
    os.system("scrapy crawl spider -a id=" + id)
    scraped_num += 1
