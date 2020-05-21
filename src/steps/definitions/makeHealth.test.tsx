import React from "react";
import { TestNamedSchema } from "../../__fixtures__/TestNamedSchema";
import { HealthKey, makeHealth } from "./makeHealth";

it("should return correctly", () => {
  expect(
    makeHealth<
      TestNamedSchema,
      "store",
      "slug-a" | "slug-b" | "slug-repeat-a" | "slug-repeat-b"
    >(
      {
        basePath: "/base/path",
        stepSlugs: ["slug-a", "slug-b"],
        repeatingStepSlugs: ["slug-repeat-a", "slug-repeat-b"],
        slug: "slug-a",
        nextSlug: "slug-b",
        componentDatabaseMaps: {
          [HealthKey.Concerns]: {
            storeName: "store",
            property: "value",
          },
          [HealthKey.Who]: {
            storeName: "store",
            property: "value",
          },
          [HealthKey.MoreInfo]: {
            storeName: "store",
            property: "value",
          },
          [HealthKey.Notes]: {
            storeName: "store",
            property: "value",
          },
        },
      },
      () => ({ tenants: [], householdMembers: [] }),
      () => <span />
    )
  ).toMatchInlineSnapshot(`
    Object {
      "heading": "Health concerns",
      "review": Object {
        "rows": Array [
          Object {
            "label": "Does anyone in the household have any health concerns?",
            "values": Object {
              "concerns": Object {
                "renderValue": [Function],
              },
            },
          },
          Object {
            "label": "Who has health concerns?",
            "values": Object {
              "who": Object {
                "renderValue": [Function],
              },
            },
          },
          Object {
            "label": "Are they interested in more information about or being linked to our support services?",
            "values": Object {
              "more-info": Object {
                "renderValue": [Function],
              },
              "notes": Object {
                "renderValue": [Function],
              },
            },
          },
        ],
      },
      "step": Object {
        "componentWrappers": Array [
          ComponentWrapper {
            "databaseMap": ComponentDatabaseMap {
              "key": [Function],
              "property": Array [
                "value",
              ],
              "storeName": "store",
            },
            "defaultValue": "",
            "emptyValue": "",
            "key": "concerns",
            "render": [Function],
            "renderWhen": [Function],
            "required": false,
          },
          ComponentWrapper {
            "databaseMap": ComponentDatabaseMap {
              "key": [Function],
              "property": Array [
                "value",
              ],
              "storeName": "store",
            },
            "defaultValue": Array [],
            "emptyValue": Array [],
            "key": "who",
            "render": [Function],
            "renderWhen": [Function],
            "required": false,
          },
          ComponentWrapper {
            "databaseMap": ComponentDatabaseMap {
              "key": [Function],
              "property": Array [
                "value",
              ],
              "storeName": "store",
            },
            "defaultValue": Array [],
            "emptyValue": Array [],
            "key": "more-info",
            "render": [Function],
            "renderWhen": [Function],
            "required": false,
          },
          ComponentWrapper {
            "databaseMap": ComponentDatabaseMap {
              "key": [Function],
              "property": Array [
                "value",
              ],
              "storeName": "store",
            },
            "defaultValue": Array [],
            "emptyValue": Array [],
            "key": "notes",
            "render": [Function],
            "renderWhen": [Function],
            "required": false,
          },
        ],
        "nextSlug": "slug-b",
        "slug": "slug-a",
        "submit": [Function],
      },
      "title": "Health",
    }
  `);
});