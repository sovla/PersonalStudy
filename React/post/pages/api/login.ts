// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    name: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const result = await axios
        .post("http://localhost:3002/api/login", {
            ...req.body,
        })
        .catch((err) => console.log(err));

    return result;
}
