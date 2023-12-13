// "use client";
import React from "react";
import { Category, Companion } from "@prisma/client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface CompanionFormProps {
	initialData: Companion | null;
	category: Category[];
}

const formSchema = z.object({
	name: z.string().min(1, { message: "Name is Required" }),
	description: z.string().min(1, { message: "Description is Required" }),
	instruction: z.string().min(200, {
		message: "Instruction  is Required atleast 200 characters",
	}),
	seed: z
		.string()
		.min(20, { message: "Seed is Required atleast 20 characters" }),
	src: z.string().min(1, { message: "Image is Required " }),
	categoryId: z.string().min(1, { message: "Category is Required " }),
});

const CompanionForm = ({ initialData, category }: CompanionFormProps) => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: initialData || {
			name: "",
			description: "",
			instruction: "",
			seed: "",
			src: "",
			categoryId: undefined,
		},
	});

	const isLoading = form.formState.isSubmitting;
	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		console.log();
	};

	return (
		<>
			<div>helleo</div>
		</>
	);
};

export default CompanionForm;
