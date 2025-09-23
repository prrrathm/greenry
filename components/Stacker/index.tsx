"use client";

const Stacker = () => {
	return (
		<>
			<style jsx>{`
				:root {
					--card-height: 40vw;
					--card-margin: 4vw;
					--card-top-offset: 1em;
					--numcards: 4;
				}

				#card-1 {
					--index: 1;
				}

				#card-2 {
					--index: 2;
				}

				#card-3 {
					--index: 3;
				}

				#card-4 {
					--index: 4;
				}

				.card {
					padding-top: calc(var(--index) * var(--card-top-offset));
				}

				/* Animation */
				@supports (animation-timeline: works) {
					@scroll-timeline cards-element-scrolls-in-body {
						source: selector(body);
						scroll-offsets: selector(#cards) start 1, selector(#cards) start 0;
						start: selector(#cards) start 1;
						end: selector(#cards) start 0;
						time-range: 4s;
					}

					.card {
						--index0: calc(var(--index) - 1);
						--reverse-index: calc(var(--numcards) - var(--index0));
						--reverse-index0: calc(var(--reverse-index) - 1);
					}

					.card__content {
						transform-origin: 50% 0%;
						will-change: transform;

						--duration: calc(var(--reverse-index0) * 1s);
						--delay: calc(var(--index0) * 1s);

						animation: var(--duration) linear scale var(--delay) forwards;
						animation-timeline: cards-element-scrolls-in-body;
					}

					@keyframes scale {
						to {
							transform: scale(calc(1.1 - calc(0.1 * var(--reverse-index))));
						}
					}
				}
			`}</style>
			<div className="bg-gray-900 text-amber-100 text-center py-[20vh] px-20">
				<ul
					id="cards"
					className="list-none grid grid-cols-1 gap-[4vw] pb-[calc(4*1em)] mb-[4vw]"
					style={{
						gridTemplateRows: "repeat(var(--numcards), var(--card-height))",
					}}
				>
					<li className="card sticky top-20" id="card-1">
						<div className="card-content bg-orange-50 text-gray-900 rounded-[2rem] overflow-hidden grid grid-cols-2 items-stretch p-6 shadow-[0_0.2em_1em_rgba(0,0,0,0.1),0_1em_2em_rgba(0,0,0,0.1)]">
							<div className="w-[95%] max-w-[800px] justify-self-center text-left grid gap-4 place-items-start">
								<h2 className="font-bold text-4xl m-0">Card One</h2>
								<p className="font-light leading-[1.42] text-lg">
									This is the content of card one. Lorem ipsum dolor sit amet
									consectetur adipisicing elit.
								</p>
							</div>
							<figure className="overflow-hidden">
								{/* <img src="https://assets.codepen.io/210284/flower-9.jpg" alt="card-one" className="w-full h-full object-cover rounded-lg"> */}
							</figure>
						</div>
					</li>

					<li className="card sticky top-20" id="card-2">
						<div className="card-content bg-orange-50 text-gray-900 rounded-[2rem] overflow-hidden grid grid-cols-2 items-stretch p-6 shadow-[0_0.2em_1em_rgba(0,0,0,0.1),0_1em_2em_rgba(0,0,0,0.1)]">
							<div className="w-[95%] max-w-[800px] justify-self-center text-left grid gap-4 place-items-start">
								<h2 className="font-bold text-4xl m-0">Card Two</h2>
								<p className="font-light leading-[1.42] text-lg">
									This is the content of card two. Lorem ipsum dolor sit amet
									consectetur adipisicing elit.
								</p>
							</div>
							<figure className="overflow-hidden">
								{/* <img src="https://assets.codepen.io/210284/flower-8.jpg" alt="card two" className="w-full h-full object-cover rounded-lg"> */}
							</figure>
						</div>
					</li>

					<li className="card sticky top-20" id="card-3">
						<div className="card-content bg-orange-50 text-gray-900 rounded-[2rem] overflow-hidden grid grid-cols-2 items-stretch p-6 shadow-[0_0.2em_1em_rgba(0,0,0,0.1),0_1em_2em_rgba(0,0,0,0.1)]">
							<div className="w-[95%] max-w-[800px] justify-self-center text-left grid gap-4 place-items-start">
								<h2 className="font-bold text-4xl m-0">Card Three</h2>
								<p className="font-light leading-[1.42] text-lg">
									This is the content of card three. Lorem ipsum dolor sit amet
									consectetur adipisicing elit.
								</p>
							</div>
							<figure className="overflow-hidden">
								{/* <img src="https://assets.codepen.io/210284/flower-7.jpg" alt="card three" className="w-full h-full object-cover rounded-lg"> */}
							</figure>
						</div>
					</li>

					<li className="card sticky top-20" id="card-4">
						<div className="card-content bg-orange-50 text-gray-900 rounded-[2rem] overflow-hidden grid grid-cols-2 items-stretch p-6 shadow-[0_0.2em_1em_rgba(0,0,0,0.1),0_1em_2em_rgba(0,0,0,0.1)]">
							<div className="w-[95%] max-w-[800px] justify-self-center text-left grid gap-4 place-items-start">
								<h2 className="font-bold text-4xl m-0">Card Four</h2>
								<p className="font-light leading-[1.42] text-lg">
									This is the content of card four. Lorem ipsum dolor sit amet
									consectetur adipisicing elit.
								</p>
							</div>
							<figure className="overflow-hidden">
								{/* <img src="https://assets.codepen.io/210284/flower-6.jpg" alt="card four" className="w-full h-full object-cover rounded-lg"> */}
							</figure>
						</div>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Stacker;
