import scrapy
from ..utils import utils

class SpiderSpider(scrapy.Spider):
    name = 'spider'
    root_url = 'https://prnt.sc/'
    allowed_domains = ['prnt.sc']
    start_urls = []

    def __init__(self, id='', **kwargs):
        self.parent_url = id
        self.start_urls.append(id)
        super(SpiderSpider, self).__init__(**kwargs)

    def request(self, url, callback):
        request_with_cookies = scrapy.Request(
            url=(self.root_url + url),
            callback=callback)
        return request_with_cookies

    def start_requests(self):
        while self.start_urls.__len__() > 0:
            url = self.start_urls.pop()
            yield self.request(url, self.parse)

    def parse(self, response):
        img = response.css('div.image-container img.screenshot-image::attr(src)').extract_first()
        utils.save_image(img)
        print("Scraped image: " + img)
        pass
