import requests

TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTRlY2VhNmI1ZDVjMjQ3NmNmMDhiMSIsImxldmVsIjozLjUsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InJwY3cyMDIyQGdtYWlsLmNvbSIsImlhdCI6MTY1NDAxNDYwNiwiZXhwIjoxNjU0MDQzNDA2fQ.T7Yx-NzXwsj1KJL0h_JYiyIkcjNCYQ3fibIL3_xY5HnyvlOIv6Rm9C2T-39Fyr7bpgNeYpIVqkcsaY3pcpo5_cwJOH5noS0EsaOxoPq8qjEdVZFRiS50denVGS966GT-dvu7XBzL47Wd5RH5dHUacxG2xezGuW1_dwbr4BSEohR0jH2UKWwoh-fdS0F0oj8pW5Lqc03HoFQxYS37N2FsBjLd_NDHxAlxGl2-W6Wny_6p29ClRS-X2ahLx4Vv661xCivdkTsDe6j32SyL_UizRtgtd2kOmUYy9qMcGupIpMLBbm-mBNJYfbb3fG3ZKZIqvcUVp5di6uncA0NCD3N-bg"
API = "http://clav-api.di.uminho.pt/v2/"

entidades = requests.get(API+"entidades?token="+TOKEN)

print(len(entidades.json()))


desc_750_20_nivel3 = requests.get(API+"classes/c750.20/descendencia?token="+TOKEN)

print(len(desc_750_20_nivel3.json()))

proc_relacionados = requests.get(API+"classes/c750.20.600/procRel?token="+TOKEN)

print(len(proc_relacionados.json()))