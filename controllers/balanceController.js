const User = require("../models/User");

const updateBalance = async (req, res) => {
  const userId = req.params.id;
  const { amount, isDeposit } = req.body;

  if (!userId || !amount) {
    return res
      .status(400)
      .json({ message: "UserId and amount are required to update balance" });
  }

  try {
    const foundUser = await User.findByPk(Number(userId));
    try {
      if (isDeposit) {
        await deposit(foundUser, amount);
      } else {
        await withdraw(foundUser, amount);
      }
    } catch (err) {
      console.error("Error updating balance:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.json({ message: "Balance updated successfully", foundUser });
  } catch (err) {
    console.error("Error finding user by ID:", err);
  }
};

async function deposit(user, amount) {
  if (user.balance + amount < 0) {
    return res.status(400).json({ error: "Insufficient funds" });
  }

  user.balance += amount;
  await user.save();
}

async function withdraw(user, amount) {
  if (user.balance + amount < 0) {
    return res.status(400).json({ error: "Insufficient funds" });
  }

  user.balance -= amount;
  await user.save();
}

module.exports = { updateBalance };
