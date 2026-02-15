function TestSection() {
    return (
        <div>
            <div class='overflow-hidden'>
                <div class='container mx-auto max-w-7xl px-6 py-16'>
                    <div class='flex flex-col items-center gap-12 lg:flex-row'>
                        {/* Left Column */}
                        <div class='flex max-w-lg flex-col items-center lg:w-1/2 lg:items-end'>
                            <h2 class='mb-6 text-4xl font-bold'>
                                Your Heading Goes Here
                            </h2>
                            <p class='max-w-96 text-lg text-gray-600'>
                                This is your paragraph content. You can describe
                                your product, service, or feature here. This
                                layout is common in SaaS landing pages and
                                marketing sites.
                            </p>
                        </div>

                        {/* Right Column */}
                        <div class='relative lg:w-1/2'>
                            <img
                                src='src/assets/dashboard-section-img.png'
                                alt='Example'
                                class='w-full lg:w-[140%] lg:max-w-none lg:translate-x-1/8'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestSection;
