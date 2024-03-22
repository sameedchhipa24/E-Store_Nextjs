import { defineField, defineType } from "sanity"

export default defineType({
    name: "product",
    title: "Product",
    type: "document",
    fields:[
        {
            name: "name",
            title: "Name of Product",
            type: "string"
        },
        {
            name:"images",
            title:"Product Images",
            type:"array",
            of:[{type:"image"}]
        },
        {
            name:"description",
            type:"text",
            title:"Description of Product"
        },
        {
            name:"slug",
            title:"Product Slug",
            type:"slug",
            options:{
                source:"name"
            }
        },
        {
            name:"price",
            title:"Price",
            type:"number"
        },
        {
            name:"category",
            title:"Product Category",
            type:"reference",
            to:[{
                type:"category"
            }]
        }
    ]
})