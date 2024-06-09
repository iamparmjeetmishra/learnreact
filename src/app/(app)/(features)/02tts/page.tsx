"use client";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea";
import React, { useEffect, useState } from "react";
import useTts from "./useTts";


export default function Tts() {
	const basicSpeak = () => {
		// Create a speech sysnthesis utterance
		const utterance = new SpeechSynthesisUtterance("Hello There");

		// Select a voice
		const voice = speechSynthesis.getVoices();
		utterance.voice = voice[0];

		// speak the text
		speechSynthesis.speak(utterance);
	};

	// Next

	const [text, setText] = useState("Hello there my amazing friend.");
	const [voice, setVoice] = useState<voices | null>(null);
	const { voices, speak, resume, pause, cancel } = useTts();

	useEffect(() => {
		setVoice(voices[0]);
	}, [voices]);

	// const onClick = () => speak({ text }, voice);

	const onClick = () => speak(text , voice);


	const onVoiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setVoice(voices.find((v) => v.name === e.target.value));
	};

	const onTextChange = (e:any) => {
		setText(e.target.value);
	};

	return (
		<div className="flex flex-col justify-center items-center min-h-screen">
			<h2 className="text-3xl font-bold">TTS-Text to Speech</h2>
			<p>
				TTS-Using Browser API supported by all the modern browsers.
			</p>
			<div className="mt-4 border p-4">
				<Button onClick={basicSpeak}>Basic Speak</Button>
			</div>
			{/* Another design */}
			<div className="w-2/4 mt-4 border border-orange-400/40 p-6 flex flex-col gap-4 shadow-sm bg-orange-100/40 ">
				<p className="font-bold text-2xl">Text To Audio</p>
				<Textarea rows={5} value={text} onChange={onTextChange} />

				<Select value={voice?.name} onChange={onVoiceChange}>
					<SelectTrigger>
						<SelectValue placeholder='Select the voice' />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							{voices.map((voice) => (
									<SelectItem
										key={voice.name}
										value={voice.name}
									>
										{voice.name}
									</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
				<div className="flex gap-4">
					<Button onClick={onClick}>Start</Button>
					<Button onClick={pause}>Stop</Button>
					<Button onClick={resume}>Resume</Button>
					<Button onClick={cancel}>Cancel</Button>
				</div>
			</div>
		</div>
	);
}
