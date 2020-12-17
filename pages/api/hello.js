// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// middleware: controlador de petición (similar express)
export default (req, res) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
