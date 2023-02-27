// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
      names: [
          {name: 'John Doe', id: "1"},
          {name: 'John ', id: "2"},
          {name: ' Doe', id: "3"},
          {name: 'JohnDoe', id: "4"},
          {name: 'Joe', id: "5"},
          {name: 'Johny', id: "6"},
      ]})
}
