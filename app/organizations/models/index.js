const mongoose = require("mongoose")
const Schema = mongoose.Schema

const model = new Schema(
  {
    name: {
      trim: true,
      type: String,
      required: true,
    },
    email: {
      trim: true,
      type: String,
    },
    phone: {
      type: String,
    },
    logo: {
      type: String,
    },
    users: [
      {
        _id: false,
        userId: {
          type: Schema.Types.ObjectId,
          ref: "user",
          required: true,
        },
        role: {
          type: String,
          enum: ["admin", "user"],
          default: "user",
        },
        owner: {
          type: Boolean,
          default: false,
        },
        permissions: {
          type: Object,
        },
      },
    ],
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { versionKey: false, timestamps: true }
)

module.exports = mongoose.model("organization", model)
