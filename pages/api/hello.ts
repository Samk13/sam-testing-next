// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name?: string
  errorMessage?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  debugger
  if (req.method === 'POST') {
    const reqData = req.body.name.split(' ')
    if (!arrIsNumeric(reqData))
      return res.status(400).json({ errorMessage: 'Please enter a number' })
    else
      res.status(200).json({
        name: req.body.name.trim().split(' '),
      })
  } else {
    res.status(200).json({ name: 'John Doe' })
  }
}

// check if the request is numeric
const isNumber = (req: string) => {
  return Number.isInteger(Number(req))
}
// check if input is string
const isString = (req: string) => {
  return typeof req === 'string'
}

const arrIsNumeric = (arr: string[]) => {
  return arr.every(isNumber)
}
