import { fetchOpenAi } from '@/utils/fetch';

export const chatCompletion = (params)=>{
  return fetchOpenAi('/chat/completions', {
    model: 'gpt-3.5-turbo',
    messages: params
  }) as Promise<CreateChatCompletionResponse>
} 