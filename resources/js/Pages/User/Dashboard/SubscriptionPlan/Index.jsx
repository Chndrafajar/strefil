import React from "react";
import Autehnticated from "@/Layouts/Authenticated";
import SubscriptionCard from "@/Components/SubscriptionCard";
import { router } from "@inertiajs/react";

export default function SubscriptionPlan({ auth, subscriptionPlans }) {
    const selectSubscription = (id) => {
        router.post(
            route("user.dashboard.subscriptionPlan.userSubscribe", {
                subscriptionPlan: id,
            })
        );
    };

    return (
        <Autehnticated auth={auth}>
            <div className="ml-[300px] px-[50px]">
                <div className="py-20 flex flex-col items-center">
                    <div className="text-black font-semibold text-[26px] mb-3">
                        Pricing for Everyone
                    </div>
                    <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                        Invest your little money to get a whole new experiences
                        from movies.
                    </p>
                    {/* Pricing Card */}
                    <div className="flex justify-center gap-10 mt-[70px]">
                        {subscriptionPlans.map((subscriptionPlan) => (
                            <SubscriptionCard
                                name={subscriptionPlan.name}
                                price={subscriptionPlan.price}
                                durationInMonth={
                                    subscriptionPlan.active_period_in_months
                                }
                                features={JSON.parse(subscriptionPlan.features)}
                                isPremium={subscriptionPlan.name === "Premium"}
                                key={subscriptionPlan.id}
                                onSelectSubscription={() =>
                                    selectSubscription(subscriptionPlan.id)
                                }
                            />
                        ))}
                    </div>
                    {/* /Pricing Card */}
                </div>
            </div>
        </Autehnticated>
    );
}
