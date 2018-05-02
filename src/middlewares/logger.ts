const RequestLogger = (req, res, next) => {
  console.log(
    `[${req.method}] ${req.path} | params: ${JSON.stringify(req.params)}`,
  )
  next()
}

export default RequestLogger
