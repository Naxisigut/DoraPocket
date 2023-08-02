declare type Message  = {
  role: 'assistant' | 'user',
  content: string
}

declare type Choice = {
  finish_reason: string,
  index: number,
  message: Message
}

declare interface CreateChatCompletionResponse{
  created: number;
  id: string;
  model: string;
  object: string;
  usage: {
    completion_tokens: number,
    prompt_tokens: number,
    total_tokens: number,
  };
  choices: Array<Choice>
}

declare type ConfigForm = {
  basePath: string,
  apiKey: string
}