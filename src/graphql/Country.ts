import { extendType, objectType } from "nexus";
import { NexusGenObjects } from "../nexus-typegen";
import countryData from "../data/country.data";

export const Link = objectType({
    name: "Country",
    definition(t) {
        t.nonNull.string("Name");
        t.nonNull.string("Alpha2Code");
        t.nonNull.string("Alpha3Code");
        t.nonNull.string("NumericCode");
    }
});


const countries: NexusGenObjects["Country"][] = countryData;

export const LinkQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("countries", {
            type: Link,
            resolve(parent, args, context, info) {
                return countries;
            }
        });
    },
});