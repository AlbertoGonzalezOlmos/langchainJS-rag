import "dotenv/config";
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage } from "@langchain/core/messages";

// Coerce response type with JSON mode.
// Requires "gpt-4-1106-preview" or later
const jsonModeModel = new ChatOpenAI({
  modelName: "gpt-4-1106-preview",
  maxTokens: 128,
}).bind({
  response_format: {
    type: "json_object",
  },
});

// Must be invoked with a system message containing the string "JSON":
// https://platform.openai.com/docs/guides/text-generation/json-mode
const res = await jsonModeModel.invoke([
  ["system", "Only return JSON"],
  ["human", "Hi there!"],
]);
console.log(res.content);

// await model.invoke([new HumanMessage("Tell me a joke.")]);

// console.log(model);
