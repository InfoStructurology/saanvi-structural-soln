import React, { useState } from 'react';

const categories = ["All Posts", "Solar Trends", "Building Tech", "Telecom Innovations", "Company News", "Case Study"];

const featuredPost = {
    category: "Solar Trends",
    date: "Oct 24, 2023",
    readTime: "5 min read",
    title: "The Future of Solar Integration in Urban Infrastructure",
    excerpt: "Exploring how dual-use structures are maximizing land efficiency in modern cities while maintaining structural integrity. We dive deep into the engineering challenges and triumphs of vertical solar adoption.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmoBktc1ClBe2Ddpf-IDBM_lIod9tsYvfMHd70ppZNuCNdF4_H8tByG7QmN3a1QgV6-xEx07ciNInb-uuzr7xIGRe23RrnD1gc12ku5REEDGtbG6eU-mj5M64I5T9V94FLD7OKGtKUc_uDq-YxcL4tDgmNQvIJgIyL_a0vXIcRnLTG6tolcZopAyRWvyqgWvlutfgmg25tdKmA5s_kG1KXwVA9Rs2e7Ikc39WdtgHapfBbFJlasxgbHg-FG18nhpCE-Go-DzCcJTeE"
};

const blogPosts = [
    {
        id: 1,
        category: "Building Tech",
        date: "Oct 18, 2023",
        readTime: "8 min read",
        title: "Advances in Seismic Damping Systems for High-Rises",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNpKms1koDmAR_rZwzRPBAFbGigNIPJLWIQ14uCbJbhc_KQTbjqb7p119lZkexA3EdYCP53fIRa0WANwLoXoGl8GXElokgiRWfJmzxpupSIPhxIISW5k80ZBlud7TjrYBPSsK360yqAHJW7WKuzoXZqU_guLGZ_WQlRFyS7CkTkmpC-RlfLFHB3qujLA_AHmGEl006LOCvNbdnMkXMRevy2jxQZ27FjLeoDYiR3PRq9dMXgkjUdmPVaJlCgEjVbw2pxbU_DGsSSanG"
    },
    {
        id: 2,
        category: "Telecom Innovations",
        date: "Oct 12, 2023",
        readTime: "4 min read",
        title: "Lightweight Materials Revolutionizing 5G Tower Deployments",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiGKt78kOZrUB-xdh6MbblcwxlaGtFQkxnzuTByg93qNhkJcj2hdWGRG5XsGPspZG7oXJ1UI30jvHyZJJ4bvRiiCUEe4P5tihkM5Ikav-uBO3zNnlU3j-63QtmYO1XhD04_8MLlpSSOdzoY6Cmfhz_Ide-UjFeDv4gzgJ_tpXVIDLfWeUv5zpeZquuixhQSjq_22q6E-g4OG3UV9jg13c-bFAb-qe5xajBZzeevGJppg8dHuvyuIFC6ReHUa0snENBee1arcsO19UF"
    },
    {
        id: 3,
        category: "Company News",
        date: "Sep 29, 2023",
        readTime: "2 min read",
        title: "Saanvi Structural Soln Named 'Top Innovator' for Q3 2023",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMlGp7h4pW0ckYUtbx4Y_F3SK58DXVJqhIOkOU_YRKIM6IZlfPmf1oFUhuQ4tkULeERiBCifQDKn6GbHETMqqYbxj9pYWEpKKWKoGbT_73s2DrUZKzWfAnJbE9Zp3rFYp-6lfGa1tIj6UWCmt0HA6UVw4pACIzTR1hvnJ_VZZSJjLDCZsdt7vQAaDxNQHrsT6_P2JcICNS7Jhd66WN-kuFjDdF7NlfQhMECtvTeWWcY1eZSwUuTULHTTn4SMCb8ADIMbLLdjECLx8t"
    },
    {
        id: 4,
        category: "Sustainability",
        date: "Sep 15, 2023",
        readTime: "6 min read",
        title: "Reducing Carbon Footprint in Steel Manufacturing",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZp2j9z4b0CHsi_BcqAMULgYLsPfByqkt99wlHtKZjpIciVbesfhelpzwaV1zl1yd_5YX4oBp8Ij9bx8uHlwRNYNdbV23mbifm85M9w28IX9tLzlaPIEBv_-3_tgKKVXWHhgPG7hkDTOvOQffrwbyFBk9VYT8mkgVwQmp3HNukPZFOx1-mhZ8eyCgrWuR4dJXm0FkpnFDSx2CauCOrneILiAnPLnBbR_E3WxGmMZlFS5guWH9YEtMqVmIoS5yucTZPN_5mnZBBVbg1"
    }
];

const trendingTopics = [
    "Impact of AI on Structural Analysis",
    "2024 Building Code Revisions",
    "Modular Construction Efficiency"
];

const Blogs: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState("All Posts");

    return (
        <div className="w-full relative z-10 min-h-screen bg-background-light">
            {/* Background pattern */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
                <div className="absolute bg-[#1e3a8a] opacity-[0.03] w-32 h-32 top-20 left-[10%] rounded-sm"></div>
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: "linear-gradient(to right, #144bb8 1px, transparent 1px), linear-gradient(to bottom, #144bb8 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                }}></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Header & Filters */}
                <div className="flex flex-col gap-6 pb-10">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-text-main text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">Insights & Engineering News</h1>
                        <p className="text-text-muted text-lg font-normal max-w-2xl">Updates from the forefront of structural innovation, technical breakthroughs, and sustainable engineering practices.</p>
                    </div>
                    {/* Scrollable Categories */}
                    <nav className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide" aria-label="Blog categories">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 transition-all shadow-sm ${activeCategory === cat
                                        ? "bg-primary text-white font-bold"
                                        : "bg-white border border-border-light hover:border-primary/50 text-text-muted font-medium"
                                    }`}
                            >
                                <span className="text-sm">{cat}</span>
                            </button>
                        ))}
                    </nav>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Main Content Column */}
                    <div className="lg:col-span-8 flex flex-col gap-10">
                        {/* Featured Post */}
                        <article className="group relative overflow-hidden rounded-xl bg-white shadow-md border border-border-light transition-shadow hover:shadow-lg">
                            <div className="relative h-[320px] w-full overflow-hidden">
                                <img
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Featured</div>
                            </div>
                            <div className="p-6 sm:p-8 flex flex-col gap-4">
                                <div className="flex items-center gap-3 text-sm text-text-muted">
                                    <span className="font-semibold text-primary">{featuredPost.category}</span>
                                    <span className="size-1 rounded-full bg-gray-300"></span>
                                    <span>{featuredPost.date}</span>
                                    <span className="size-1 rounded-full bg-gray-300"></span>
                                    <span>{featuredPost.readTime}</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-text-main group-hover:text-primary transition-colors">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-text-muted leading-relaxed text-base">
                                    {featuredPost.excerpt}
                                </p>
                                <button className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all mt-2 text-left">
                                    Read Featured Article
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </button>
                            </div>
                        </article>

                        {/* Blog Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {blogPosts.map(post => (
                                <article key={post.id} className="flex flex-col gap-4 group cursor-pointer">
                                    <div className="overflow-hidden rounded-lg bg-gray-100 aspect-[16/10] relative">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 absolute inset-0"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                                            <span>{post.category}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-text-main group-hover:text-primary transition-colors leading-snug">
                                            {post.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-sm text-text-muted mt-1">
                                            <span>{post.date}</span>
                                            <span>•</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center mt-8">
                            <button className="px-6 py-2 rounded-lg border border-border-light hover:border-primary text-sm font-bold text-text-main transition-colors hover:text-primary">
                                Load More Articles
                            </button>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 flex flex-col gap-8 ">
                        {/* Newsletter Widget */}
                        {/* <div className="rounded-xl bg-white border border-border-light p-6 sticky top-24 z-20 shadow-sm">
                    <div className="mb-4">
                        <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
                            <span className="material-symbols-outlined text-primary">mail</span>
                        </div>
                        <h3 className="text-xl font-bold text-text-main mb-2">Subscribe to our Newsletter</h3>
                        <p className="text-sm text-text-muted">
                            Get the latest engineering insights and company updates delivered directly to your inbox.
                        </p>
                    </div>
                    <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="sr-only" htmlFor="email">Email address</label>
                            <input className="w-full px-4 py-3 rounded-lg bg-background-off border border-border-light focus:ring-2 focus:ring-primary focus:border-primary text-sm outline-none transition-all placeholder:text-gray-400" id="email" placeholder="name@company.com" type="email"/>
                        </div>
                        <button className="w-full flex items-center justify-center rounded-lg h-10 px-4 bg-primary hover:bg-primary-dark text-white text-sm font-bold shadow-sm transition-all" type="submit">
                            Subscribe
                        </button>
                    </form>
                    <p className="text-xs text-text-muted mt-4 text-center">
                        No spam. Unsubscribe anytime.
                    </p>
                </div> */}

                        {/* Trending Topics List */}
                        <div className="rounded-xl bg-white p-6 sticky top-24 z-20 shadow-sm">

                            <div className="flex flex-col gap-4 mb-20">
                                <h4 className="text-sm font-bold uppercase tracking-wider text-text-muted">Trending Topics</h4>
                                <ul className="flex flex-col gap-3">
                                    {trendingTopics.map((topic, index) => (
                                        <li key={index}>
                                            <a className="group flex items-start gap-3 hover:bg-white p-2 rounded-lg transition-colors -mx-2 cursor-pointer">
                                                <span className="text-lg font-bold text-gray-300 group-hover:text-primary transition-colors">{String(index + 1).padStart(2, '0')}</span>
                                                <div>
                                                    <h5 className="text-sm font-bold text-text-main leading-snug group-hover:text-primary transition-colors">{topic}</h5>
                                                </div>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Mini Ad / Quote CTA */}
                            <div className="relative overflow-hidden rounded-xl bg-primary p-6 text-white text-center shadow-lg">
                                <div className="relative z-10 flex flex-col items-center gap-3">
                                    <h4 className="text-lg font-bold">Need Structural Expertise?</h4>
                                    <p className="text-sm text-white/90">Our team is ready to tackle your complex engineering challenges.</p>
                                    <button className="mt-2 bg-white text-primary text-xs font-bold px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                                        Start a Project
                                    </button>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
                                <div className="absolute -bottom-6 -right-6 text-white/10">
                                    <span className="material-symbols-outlined text-9xl">architecture</span>
                                </div>
                            </div>
                        </div>

                    </aside>
                </div>
            </div>
        </div>
    );
};

export default Blogs;