import { Injectable } from '@nestjs/common';
import { ChatGroq } from '@langchain/groq';
import { ChatPromptTemplate } from '@langchain/core/prompts';

@Injectable()
export class AiService {
  private readonly model = new ChatGroq({
    apiKey: process.env.GROQ_API_KEY,
    model: 'llama-3.1-8b-instant',
    temperature: 0.2,
  });

  async chat(question: string, machines: any[]): Promise<string> {
    const prompt = ChatPromptTemplate.fromMessages([
      [
        'system',
        `You are an AI Machine Monitoring Assistant.
You analyze machine temperature, energy usage, and status.
Provide actionable, concise insights.`
      ],
      ['user', '{input}'],
    ]);

    const chain = prompt.pipe(this.model);

    const response = await chain.invoke({
      input: JSON.stringify({
        question,
        machines,
      }),
    });

    const text =
      typeof response.content === 'string'
        ? response.content
        : JSON.stringify(response.content);

    return text;
  }
}
