"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MemeGenerator() {
  const [topic, setTopic] = useState("");
  const [meme, setMeme] = useState<string | null>(null);

  const templates = [
    "When you {topic} but {unexpected}",
    "That moment when {topic} hits you like a ton of bricks",
    "I can't believe {topic} actually happened",
    "When {topic} is just too much to handle",
    "The face you make when {topic} goes wrong",
  ];

  const unexpected = [
    "and you win",
    "and everyone laughs",
    "and you lose",
    "and it turns out to be a joke",
    "and you realize it's a meme",
  ];

  const generate = () => {
    if (!topic.trim()) return;
    const tmpl = templates[Math.floor(Math.random() * templates.length)];
    const exp = unexpected[Math.floor(Math.random() * unexpected.length)];
    const idea = tmpl.replace("{topic}", topic).replace("{unexpected}", exp);
    setMeme(idea);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Random Meme Idea Generator</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Input
          placeholder="Enter a topic (e.g., 'coding', 'cats')"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <Button onClick={generate}>Generate Meme Idea</Button>
        {meme && (
          <div className="mt-4 p-4 bg-muted rounded-md">
            <p className="text-lg font-medium">{meme}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
