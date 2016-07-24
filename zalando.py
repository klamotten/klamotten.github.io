import json
import sys

def _filter(l):
    l = [ z.lower().replace(' ', '') for z in l]
    return [''.join(i for i in z if i.isalpha()) for z in l]

def _open_data(json_file):
    with open(json_file) as jf:
        return json.load(jf);

def _common(l1, l2):
    list1 = _filter(l1)
    list2 = _filter(l2)

    res = []
    for ind,el1 in enumerate(list1):
        for el2 in list2:
            if (el1 == el2) or (len(el2) > 6 and el1.startswith(el2)) or (len(el1) > 6 and el2.startswith(el1)):
                if l1[ind] not in res:
                    res.append(l1[ind])
    return res

def wrong_input():
    usage = """
    Usage: zalando.py ( {0} )
    """.format(' | '.join(shop for shop in shops))
    print(usage)
    return 1

def check(shop):
    shop_data = _open_data('{0}.json'.format(shop))
    return _common(shop_data, zalando)

zalando = _open_data('zalando.json')
shops = ['loop5', 'peek-cloppenburg', 'goertz', 'henschel', 'roemer', 'galeria']

def main():
    if len(sys.argv) != 2:
        return wrong_input()

    shop = sys.argv[1];
    if shop not in shops:
        return wrong_input()

    labels = check(shop)
    for label in labels:
        print(label)
    return 0

if __name__ == "__main__":
    sys.exit(main())
