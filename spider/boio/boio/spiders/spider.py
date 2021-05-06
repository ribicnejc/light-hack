import scrapy


class SpiderSpider(scrapy.Spider):
    name = 'spider'
    allowed_domains = ['spider.com']
    start_urls = ['https://prnt.sc/aa0000']

    def parse(self, response):
        pass
