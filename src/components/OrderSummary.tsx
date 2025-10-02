"use client";

import { FC, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { service, additionalServices, extraServices } from "@/utils/services";

// 🔹 Helper: Price Calculation
const calculatePrice = (
  vehicleType: string,
  packageType: string,
  serviceCategory?: string,
  vehicleSize?: number,
  extraService?: string
) => {
  if (extraService && extraService !== "none") {
    const pkg = extraServices[extraService]?.[packageType];
    if (!pkg) return 0;
    if (pkg.price != null) return pkg.price;
    if (pkg.pricePerFt != null && vehicleSize) return pkg.pricePerFt * vehicleSize;
    return 0;
  }

  if (["suv", "truck", "van", "sedan", "bike"].includes(vehicleType)) {
    const [category, pkgKey] = packageType.split("-");
    return service[vehicleType]?.[category]?.[pkgKey]?.price || 0;
  }

  if (["boat", "rv"].includes(vehicleType)) {
    return (
      (service[vehicleType]?.[packageType]?.pricePerFt || 0) *
      (vehicleSize || 0)
    );
  }

  if (["jetski"].includes(vehicleType)) {
    return service[vehicleType]?.[packageType]?.price || 0;
  }

  return 0;
};

// 🔹 Helper: Format Labels
const formatLabel = (str: string) =>
  str.replace(/([a-z])([A-Z])/g, "$1 $2")
     .replace(/_/g, " ")
     .replace(/\b\w/g, (c) => c.toUpperCase());

interface OrderSummaryProps {
  formData: any;
  totalPrice: number;
  discountedPrice: number;
  isPromoValid: boolean;
}

const OrderSummaryAccordion: FC<OrderSummaryProps> = ({
  formData,
  totalPrice,
  discountedPrice,
  isPromoValid,
}) => {
  const [open, setOpen] = useState(true);
  const toggleOpen = () => setOpen(!open);

  return (
    <Card className="mt-6 border-0 shadow-lg bg-green-100">
      <CardContent className="p-6">
        {/* Accordion Header */}
        <div
          className="flex items-center cursor-pointer"
          onClick={toggleOpen}
        >
          <h2 className="text-lg font-semibold flex-1 text-center text-black">Order Summary</h2>
          {open ? <ChevronUp /> : <ChevronDown />}
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 space-y-6"
            >
              {/* Vehicle Info */}
              <div>
                <h3 className="font-medium mb-2 bg-green-100">Vehicle</h3>
                <div className="p-3  text-sm space-y-1 bg-green-100">
                  <p>
                    {formData.vehicleYear} {formData.vehicleMake} {formData.vehicleModel} ({formatLabel(formData.vehicleType)})
                    {formData.vehicleColor && ` - ${formData.vehicleColor}`}
                    {formData.vehicleSize && ` - ${formData.vehicleSize} ft`}
                  </p>
                </div>
              </div>

              {/* Selected Services */}
              <div>
                <h3 className="font-medium mb-2">Selected Services</h3>
                {formData.selectedPackages.length > 0 ? (
                  <div className="space-y-2">
                    {formData.selectedPackages.map((sp: any, idx: number) => {
                      const isExtra = ["ceramiccoating", "windowtinting"].includes(sp.category);
                      const packageId = isExtra ? sp.package : `${sp.category}-${sp.package}`;
                      const serviceCategory = isExtra ? sp.category : sp.category;
                      const price = calculatePrice(
                        formData.vehicleType,
                        packageId,
                        serviceCategory,
                        Number(formData.vehicleSize),
                        isExtra ? sp.category : undefined
                      );
                      return (
                        <div
                          key={idx}
                          className="flex justify-between p-2 bg-green-100"
                        >
                          <span>
                            {formatLabel(sp.category)} - {formatLabel(sp.package)}
                          </span>
                          <span>${price.toFixed(2)}</span>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">No service selected</p>
                )}
              </div>

              {/* Add-ons */}
              {formData.additionalServices.length > 0 && (
                <div className="bg-green-100">
                  <h3 className="font-medium mb-2">Add-ons</h3>
                  <div className="space-y-2">
                    {formData.additionalServices.map((id: string) => {
                      const add = additionalServices.find((a) => a.id === id);
                      if (!add) return null;
                      return (
                        <div
                          key={id}
                          className="flex justify-between p-2  bg-green-100"
                        >
                          <span>{add.name}</span>
                          <span>${add.price}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Totals */}
              <div className=" pt-3 space-y-1">
                <div className="flex justify-between">
                  <span className="font-medium">Subtotal:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                {isPromoValid && (
                  <div className="flex justify-between text-green-600 font-medium">
                    <span>Promo Applied (15% Discount)</span>
                    <span>-${(totalPrice - discountedPrice).toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between font-bold text-lg pt-2  mt-2">
                  <span>Total:</span>
                  <span>${discountedPrice.toFixed(2)}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};

export default OrderSummaryAccordion;
