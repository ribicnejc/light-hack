from string import ascii_lowercase


def url_combinations():
    for c1 in ascii_lowercase:
        for c2 in ascii_lowercase:
            for n1 in range(0, 10):
                for n2 in range(0, 10):
                    for n3 in range(0, 10):
                        for n4 in range(0, 10):
                            write_combination("{}{}{}{}{}{}".format(c1, c2, n1, n2, n3, n4))


def log_url(url):
    filename = 'scraped.log'
    with open(filename, 'a+') as f:
        f.write(url + "\n")
        print(url)


def is_already_scraped(url):
    filename = './utils/scraped.log'
    with open(filename) as f:
        is_scraped = url in f.read()
        f.close()
        return is_scraped


def write_combination(string):
    filename = 'urls.log'
    with open(filename, 'a+') as f:
        f.write(string + "\n")


def save_image(img):
    filename = '../../../web/imgs.log'
    with open(filename, 'a+') as f:
        f.write(img + "\n")
