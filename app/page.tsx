
import React from "react";
import { useEffect, useState } from "react";

type Review = {
    id: string;
    name: string;
};
type AirtableReviewResponseDto = {
    records: {
        id: string;
        fields: {
            name:string;
        }
    }[];
}

export default async function App(){
    //const [ reviews, setReviews ] = useState<Review[] | undefined>(undefined);
    const response = await fetch('https://api.airtable.com/v0/appZLJE69lV4Vugrp/identable?view=default',{
            headers: {
                Authorization: `Bearer ${process.env.API_KEY}`
            }
        })
        const data: AirtableReviewResponseDto = await response.json();
        const reviewsPlus: Review[] = [];        
        data.records.forEach((elem) => {
            reviewsPlus.push({
                id: elem.id,
                name:elem.fields.name,
            })
        });
        
    
    console.log(reviewsPlus)
    return (
        <div>
        <h1>app1</h1>
        <ul>
            {reviewsPlus?.map((elem) => (
            <li key={elem.id}>
                <div>{elem.name}</div>
            </li>
        ))}
        </ul>
        </div>
    )
}

