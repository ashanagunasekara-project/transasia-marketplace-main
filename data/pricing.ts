import type { PricingPlan } from "@/types/misc";

export type { PricingFeature, PricingPlan } from "@/types/misc";

export const pricingStyleOnePlans: PricingPlan[] = [
  {
    title: "Basic Plan",
    badgeText: "Free for a Month",
    yearlyPrice: 30.99,
    monthlyPrice: 8,
    features: [
      { text: "Unlimited Access Courses", included: true },
      { text: "Certificate After Completion", included: true },
      { text: "High Resolution Videos", included: true },
      { text: "24/7 Dedicated Support", included: true },
    ],
  },
  {
    title: "Standard Plan",
    badgeText: "Most Popular",
    yearlyPrice: 100.99,
    monthlyPrice: 20,
    isActive: true,
    features: [
      { text: "Unlimited Access Courses", included: true },
      { text: "Certificate After Completion", included: true },
      { text: "High Resolution Videos", included: true },
      { text: "24/7 Dedicated Support", included: true },
    ],
  },
  {
    title: "Exclusive Plan",
    badgeText: "Free for a Month",
    yearlyPrice: 99.99,
    monthlyPrice: 39,
    features: [
      { text: "Unlimited Access Courses", included: true },
      { text: "Certificate After Completion", included: true },
      { text: "High Resolution Videos", included: true },
      { text: "24/7 Dedicated Support", included: true },
    ],
  },
];

export const pricingStyleTwoPlans: PricingPlan[] = [
  {
    title: "Basic Plan",
    badgeText: "Free for a Month",
    yearlyPrice: 30.99,
    monthlyPrice: 10,
    features: [
      { text: "Unlimited Access Courses", included: true },
      { text: "Certificate After Completion", included: true },
      { text: "24/7 Dedicated Support", included: false },
      { text: "Unlimited Emails", included: false },
    ],
  },
  {
    title: "Standard Plan",
    badgeText: "Most Popular",
    yearlyPrice: 100.99,
    monthlyPrice: 20,
    isActive: true,
    pricingBadge: "Popular",
    features: [
      { text: "Unlimited Access Courses", included: true },
      { text: "Certificate After Completion", included: true },
      { text: "High Resolution Videos", included: true },
      { text: "24/7 Dedicated Support", included: true },
    ],
  },
  {
    title: "Exclusive Plan",
    badgeText: "Free for a Month",
    yearlyPrice: 99.99,
    monthlyPrice: 39,
    features: [
      { text: "Unlimited Access Courses", included: true },
      { text: "Certificate After Completion", included: true },
      { text: "24/7 Dedicated Support", included: false },
      { text: "Unlimited Emails", included: false },
    ],
  },
];

export const pricingStyleThreePlans: PricingPlan[] = [
  {
    title: "Basic Plan",
    badgeText: "Free for a Month",
    yearlyPrice: 30.99,
    monthlyPrice: 10,
    titleColorClassName: "color-primary",
    amountColorClassName: "color-primary",
    durationColorClassName: "color-primary",
    features: [
      { text: "Unlimited Access Courses", included: true },
      { text: "Certificate After Completion", included: true },
      { text: "24/7 Dedicated Support", included: false },
      { text: "Unlimited Emails", included: false },
    ],
  },
  {
    title: "Standard Plan",
    badgeText: "Most Popular",
    yearlyPrice: 100.99,
    monthlyPrice: 20,
    isActive: true,
    pricingBadge: "Popular",
    titleColorClassName: "color-secondary",
    amountColorClassName: "color-secondary",
    durationColorClassName: "color-secondary",
    features: [
      { text: "Unlimited Access Courses", included: true },
      { text: "Certificate After Completion", included: true },
      { text: "High Resolution Videos", included: true },
      { text: "24/7 Dedicated Support", included: true },
    ],
  },
  {
    title: "Exclusive Plan",
    badgeText: "Free for a Month",
    yearlyPrice: 99.99,
    monthlyPrice: 39,
    titleColorClassName: "color-pink",
    amountColorClassName: "color-pink",
    durationColorClassName: "color-pink",
    features: [
      { text: "Unlimited Access Courses", included: true },
      { text: "Certificate After Completion", included: true },
      { text: "24/7 Dedicated Support", included: false },
      { text: "Unlimited Emails", included: false },
    ],
  },
];

export const pricingStyleFourData = {
  mainTitle: "Active Plan Mode.",
  description:
    "Unimart is a modern e-commerce platform designed to make online shopping simple, secure, and convenient.",
  price: 129,
  priceSuffix: "/mo",
  primaryButtonText: "Purchase Now",
  secondaryButtonText: "Upgrade",
  ratingCount: 5,
  ratingSubtitle: "rated 4.5/5 Stars in 1000+ reviews.",
  sections: [
    {
      title: "Advance Plans You can Get.",
      items: [
        { text: "5 PPC Campaigns", included: true },
        { text: "Digital Marketing", included: true },
        { text: "Marketing Agency", included: true },
        { text: "Seo Friendly", included: true },
      ],
    },
    {
      title: "Basic Plans You can Get.",
      items: [
        { text: "5 PPC Campaigns", included: true },
        { text: "Digital Marketing", included: true },
        { text: "Marketing Agency", included: true },
        { text: "Seo Friendly", included: true },
        { text: "App Development", included: true },
        { text: "24/7 Dedicated Support", included: false },
      ],
    },
  ],
};
