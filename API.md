# Canada Holidays API

The <a href="https://canada-holidays.ca/api/v1/" target="_blank">Canada Holidays API</a> lists all 30 public holidays for all 13 provinces and territories in Canada, including federal holidays.

**👉 <a href="https://canada-holidays.ca/api/v1/" target="_blank">https://canada-holidays.ca/api/v1/</a>**

Features:

- Returns holidays with associated regions
- Returns regions with associated holidays
- Returns only federal holidays
- Returns only national holidays
- Returns "next" holiday for each region
- Returns holidays for years: `2017`, `2018`, `2019`, `2020`, `2021`, `2022`, `2023`, `2024`, `2025`, `2026`

Plus(!) check out all these goodies you get for ✨ free ✨:

- It’s free (✨)
- <a href="https://twitter.com/pcraig3" target="_blank">Dedicated support channel</a>
- Kind of bilingual (EN & FR)
- Pretty much compliant with <a href="https://www.canada.ca/en/government/system/digital-government/modern-emerging-technologies/government-canada-standards-apis.html" target="_blank">the Government of Canada Standards on APIs</a> (heck yes 🤙)
- Open source which is cool if you’re a nerd
- Documented with an OpenAPI spec which is _even more_ cool for _even nerdier_ nerds

Definitely use it for your billions of dollars mission-critical system.

## Docs

If you know your way around a REST API with JSON responses, you’re in good shape. There's an OpenAPI spec below describing the API, and a bite-sized brief overview if you keep reading.

### OpenAPI (formerly Swagger)

<a href="https://swagger.io/docs/specification/about/" target="_blank">The OpenAPI Specification</a> is a broadly-adopted industry standard for describing APIs. The OpenAPI spec for this API is in a few places.

- <a href="https://github.com/pcraig3/hols/blob/main/reference/Canada-Holidays-API.v1.yaml" target="_blank">`Canada-Holidays-API.v1.yaml`</a> on GitHub
- At <a href="https://canada-holidays.ca/api/v1/spec" target="_blank">https://canada-holidays.ca/api/v1/spec</a>
- <a href="https://app.swaggerhub.com/apis/pcraig3/canada-holidays/" target="_blank">`canada-holidays`</a> on SwaggerHub

The SwaggerHub link includes an API explorer so you can give it a spin before you drive it off the lot.

### Basic overview

There are 5 endpoints. All are `GET` requests. As much as I know you would love to, it’s not yet possible to `PUT` additional public holidays.

- `/api/v1`
- `/api/v1/provinces`
- `/api/v1/provinces/{provinceId}`
- `/api/v1/holidays`
- `/api/v1/holidays/{holidayId}`

None of the response object keys ever contain `null` values.

#### Query parameters

There are 2 query parameters values you can use. Probably not on the root route but on others they will work.

1. `?year=2017|2018|2019|2020|2021|2022|2023|2024|2025|2026`. Defaults to current year.
2. `?federal=true|1|false|0`. `true` or `1` returns only federal holidays; `false` or `0` returns _everything but_ federal holidays.

You can combine them and they will work (eg, `/api/v1/holidays?year=2021&federal=true`).

##### 'Optional' query parameter

There is 1 optional query parameter that currently applies only to Alberta and British Columbia. <a href="https://www.alberta.ca/alberta-general-holidays.aspx#jumplinks-2" target="_blank">Alberta's official holidays page lists "optional" holidays</a>, and <a href="https://www2.gov.bc.ca/gov/content/health/practitioner-professional-resources/msp/claim-submission-payment/designated-holidays-and-close-off-dates" target="_blank">British Columbia's</a> is pretty close as well, so I am making them available via the API.

- `?optional=true|1|false|0`. `true` or `1` returns all Alberta and BC holidays, including optional holidays; `false` or `0` returns Alberta and BC holidays as per usual: this is equivalent to not using "optional" at all.

Optional holidays don't show up by default, so existing calls won’t be affected.

That should be enough to get you started. Remember, the design goal here is _simple_.
