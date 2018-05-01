const RequestLogger = (req, res, next) => {
  console.log(req.path)
  next()
}

export default RequestLogger
