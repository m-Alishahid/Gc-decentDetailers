"use client";

import { FC, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { service, additionalServices, extraServices } from "@/utils/services";

// Helper function to calculate price
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

// ✅ Capitalize helper
const formatLabel = (str: string) =>
  str.replace(/([a-z])([A-Z])/g, "$1 $2") // camelCase → camel Case
     .replace(/_/g, " ") // underscores → spaces
     .replace(/\b\w/g, (c) => c.toUpperCase()); // capitalize

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
    <Card className="mt-6 border-0 shadow-lg bg-gray-50">
      <CardContent className="p-6">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleOpen}
        >
          <h2 className="text-lg font-semibold">Order Summary</h2>
          {open ? <ChevronUp /> : <ChevronDown />}
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 space-y-4"
            >
              {/* Vehicle Info */}
              <div>
                <h3 className="font-medium mb-2">Vehicle</h3>
                <div className="p-2 border rounded text-sm space-y-1">
                  <p>
                    {formData.vehicleYear} {formData.vehicleMake}{" "}
                    {formData.vehicleModel}
                  </p>
                  <p>Type: {formatLabel(formData.vehicleType)}</p>
                  {formData.vehicleColor && <p>Color: {formData.vehicleColor}</p>}
                  {formData.vehicleSize && <p>Size: {formData.vehicleSize} ft</p>}
                </div>
              </div>

              {/* Selected Package */}
              <div>
                <h3 className="font-medium mb-2">Selected Package</h3>
                {formData.packageType ? (
                  <div className="flex justify-between p-2 border rounded">
                    <span>
                      {formatLabel(formData.serviceCategory || formData.extraService)}{" "}
                      - {formatLabel(formData.packageType)}
                    </span>
                    <span>
                      $
                      {calculatePrice(
                        formData.vehicleType,
                        formData.packageType,
                        formData.serviceCategory,
                        Number(formData.vehicleSize),
                        formData.extraService
                      )}
                    </span>
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">No package selected</p>
                )}
              </div>

              {/* Extra Service (if applicable) */}
              {formData.extraService && formData.extraService !== "none" && (
                <div>
                  <h3 className="font-medium mb-2">Extra Service</h3>
                  <div className="flex justify-between p-2 border rounded">
                    <span>{formatLabel(formData.extraService)}</span>
                    <span>
                      $
                      {calculatePrice(
                        formData.vehicleType,
                        formData.packageType,
                        formData.serviceCategory,
                        Number(formData.vehicleSize),
                        formData.extraService
                      ).toFixed(2)}
                    </span>
                  </div>
                </div>
              )}

              {/* Add-ons */}
              {formData.additionalServices.length > 0 && (
                <div>
                  <h3 className="font-medium mb-2">Add-ons</h3>
                  <div className="space-y-2">
                    {formData.additionalServices.map((id: string) => {
                      const add = additionalServices.find((a) => a.id === id);
                      if (!add) return null;
                      return (
                        <div
                          key={id}
                          className="flex justify-between p-2 border rounded"
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
<div className="border-t pt-3 space-y-1">
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
  <div className="flex justify-between font-bold text-lg pt-2 border-t mt-2">
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
