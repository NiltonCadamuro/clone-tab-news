const Status = (request, response) => {
  response.status(200).json({ status: "OK" });
};

export default Status;
