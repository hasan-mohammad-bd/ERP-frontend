import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useGetPostsQuery } from "@/store/services/json-placeholder/api/posts";
import { useGetUsersQuery } from "@/store/services/json-placeholder/api/users";
import {
	decrement,
	increment,
} from "@/store/services/json-placeholder/slices/counterSlice";

function Lobby() {
	const count = useAppSelector((state) => state.counter.value);
	const dispatch = useAppDispatch();
	const { data: posts } = useGetPostsQuery();
	const { data: users } = useGetUsersQuery();

	return (
		<div className="flex flex-col items-center justify-center my-10">
			<h1 className="text-3xl font-bold text-center">Welcome to ERP App</h1>
			<Accordion type="single" collapsible className="w-3/6 mt-5">
				<AccordionItem value="item-1">
					<AccordionTrigger>Is it accessible?</AccordionTrigger>
					<AccordionContent>
						Yes. It adheres to the WAI-ARIA design pattern.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger>Is it styled?</AccordionTrigger>
					<AccordionContent>
						Yes. It comes with default styles that matches the other
						components&apos; aesthetic.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3">
					<AccordionTrigger>Is it animated?</AccordionTrigger>
					<AccordionContent>
						Yes. It's animated by default, but you can disable it if you prefer.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
			<div className="mt-5 w-3/6 mx-auto space-y-5">
				<h1 className="text-3xl font-bold text-center">List of posts</h1>
				<div className="space-y-5">
					{posts?.slice(0, 10).map((post) => (
						<h3>{post.title}</h3>
					))}
				</div>
			</div>
			<div className="mt-5 w-3/6 mx-auto space-y-5">
				<h1 className="text-3xl font-bold text-center">List of companies</h1>
				<div className="space-y-5">
					{users?.slice(0, 10).map((user) => (
						<h3 key={user.company.name}>{user.company.name}</h3>
					))}
				</div>
			</div>
			<div className="mt-5 flex justify-center gap-5 items-center w-3/5">
				<Button
					variant="outline"
					aria-label="Increment value"
					onClick={() => dispatch(increment())}
				>
					Increment
				</Button>
				<span>{count}</span>
				<Button
					aria-label="Decrement value"
					variant="outline"
					onClick={() => dispatch(decrement())}
				>
					Decrement
				</Button>
			</div>
		</div>
	);
}

export default Lobby;
