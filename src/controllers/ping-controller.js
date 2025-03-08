export const pingController = async (req, res) => {
  try {
    res.status(200).json({ message: "Pong! Server is running successfully." });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong!" });
  }
};
