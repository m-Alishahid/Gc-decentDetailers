// src/utils/email.ts

import { format } from "date-fns";
import { Label } from "recharts";
import { extraServices, service } from "@/utils/services";

// ---------------- HELPER FUNCTIONS ----------------

// Format Add-ons list
const formatAddons = (addons: string[] = []) => {
  if (!addons || addons.length === 0) return "None";
  return `<ul style="margin:0;padding-left:18px;">${addons
    .map((addon) => `<li>${addon}</li>`)
    .join("")}</ul>`;
};

// Vehicle Type mapping
const getVehicleTypeName = (type: string) => {
  const map: Record<string, string> = {
    sedan: "Sedan",
    suv: "SUV",
    truck: "Truck",
    coupe: "Coupe",
    van: "Van",
    other: "Other",
  };
  return map[type] || type || "N/A";
};

// Table generator for sections
const generateTable = (rows: { label: string; value: string }[]) => {
  return `
    <table style="width:100%;border-collapse:collapse;">
      ${rows
        .map(
          (row) => `
        <tr>
          <td style="padding:6px 0;font-weight:600;width:160px;vertical-align:top;">${row.label}</td>
          <td style="padding:6px 0;color:#444;">${row.value}</td>
        </tr>
      `
        )
        .join("")}
    </table>
  `;
};

// Helper: format selected services with price
const formatServices = (services: any[] = [], vehicleType?: string, vehicleSize?: number) => {
  if (!services || services.length === 0) return "None";

  const formatServiceItem = (service: any) => {
    // Handle extra services (ceramiccoating, windowtinting)
    if (["ceramiccoating", "windowtinting"].includes(service.category)) {
      const extraPkg = extraServices[service.category]?.[service.package];
      if (extraPkg) {
        const price = extraPkg.pricePerFt && vehicleSize
          ? extraPkg.pricePerFt * Number(vehicleSize)
          : extraPkg.price || 0;
        return `${extraPkg.name} - $${price.toFixed(2)}`;
      }
    }

    // Handle regular vehicle services
    if (vehicleType && service.category && service.package) {
      // For cars, trucks, vans, sedans - package format is "category-package"
      if (["sedan", "suv", "truck", "van"].includes(vehicleType)) {
        const pkgObj = service[vehicleType]?.[service.category];
        if (pkgObj && typeof pkgObj === 'object') {
          const pkg = pkgObj[service.package];
          if (pkg) {
            return `${pkg.name} - $${(pkg.price || 0).toFixed(2)}`;
          }
        }
      }

      // For boats, RVs - direct package lookup
      if (["boat", "rv"].includes(vehicleType)) {
        const pkg = service[vehicleType]?.[service.category];
        if (pkg && typeof pkg === 'object') {
          const price = pkg.pricePerFt && vehicleSize
            ? pkg.pricePerFt * Number(vehicleSize)
            : pkg.price || 0;
          return `${pkg.name} - $${price.toFixed(2)}`;
        }
      }

      // For bikes, jetskis
      if (["bike", "jetski"].includes(vehicleType)) {
        const pkg = service[vehicleType]?.[service.category]?.[service.package];
        if (pkg) {
          return `${pkg.name} - $${(pkg.price || 0).toFixed(2)}`;
        }
      }
    }

    // Fallback - just show category and package
    return `${service.category} - ${service.package}`;
  };

  return `<ul style="margin:0;padding-left:18px;">${services
    .map((s) => `<li>${formatServiceItem(s)}</li>`)
    .join("")}</ul>`;
};

// Helper: format phone number to USA format (XXX) XXX-XXXX
const formatPhone = (phone: string) => {
  if (!phone) return "N/A";
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  return phone; // return as is if not 10 digits
};

// ---------------- BOOKING EMAIL TEMPLATE (Customer) ----------------

export const getUserBookingTemplate = (formData: any) => {
  const addonsList = formatAddons(formData.additionalServices);
  const vehicleTypeInfo = getVehicleTypeName(formData.vehicleType);
  const formattedDate = formData.date
    ? format(new Date(formData.date), "MMMM d, yyyy")
    : "";
  const extraPkg = extraServices[formData.extraService]?.[formData.packageType];
  const selectedServiceValue = extraPkg ? `${extraPkg.name} - $${(extraPkg.price || 0).toFixed(2)}` : "None";


  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Booking Confirmation</title>
  </head>
  <body style="font-family:'Segoe UI',Arial,sans-serif;background:#f0f4f8;padding:40px;margin:0;">
    <div style="max-width:700px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">

      <!-- Header -->
      <div style="background:#3478b3;padding:30px;text-align:center;color:#fff;">
        <h1 style="margin:0;font-size:26px;font-weight:700;">✅ Booking Confirmed</h1>
        <p style="margin:8px 0 0;font-size:16px;">Thank you ${formData.firstName}, your appointment is confirmed.</p>
      </div>

      <!-- Body -->
      <div style="padding:30px;color:#333;line-height:1.6; display: flex; flex-direction: column; gap: 20px;">
        <p>
          We truly appreciate your trust in <strong>Decent Detailers</strong>. 
          Our team will arrive on time and ensure your car looks brand new 🚘✨. 
        </p>

        <!-- Customer Info -->
        <div style="background:#fafafa;border:1px solid #eee;border-radius:8px;padding:20px; flex: 1;">
          <h3 style="margin:0 0 12px;color:#3478b3;">👤 Customer Information</h3>
          ${generateTable([
            { label: "Name:", value: `${formData.firstName} ${formData.lastName}` },
            { label: "Email:", value: formData.email },
            { label: "Phone:", value: formatPhone(formData.phone) },
            { label: "Address:", value: `${formData.address}, ${formData.city}, ${formData.state} ${formData.zip}` },
            { label: "Selected Packages:", value: formatServices(formData.selectedPackages || [], formData.vehicleType, formData.vehicleSize) },
            { label: "Total Price:", value: `$${formData.totalPrice}` },

          ])}
        </div>

        <!-- Vehicle Info -->
        <div style="background:#fafafa;border:1px solid #eee;border-radius:8px;padding:20px; flex: 1;">
          <h3 style="margin:0 0 12px;color:#3478b3;">🚗 Vehicle Information</h3>
          ${generateTable([
            { label: "Vehicle:", value: `${formData.vehicleYear} ${formData.vehicleMake} ${formData.vehicleModel} (${formData.vehicleColor})` },
            { label: "Type:", value: vehicleTypeInfo },
          ])}
        </div>

        <!-- Service & Price -->
        <div style="background:#fafafa;border:1px solid #eee;border-radius:8px;padding:20px; flex: 1;">
          <h3 style="margin:0 0 12px;color:#3478b3;">🛠️ Service Details</h3>
          ${generateTable([
            { label: "Date & Time:", value: `${formattedDate} - ${formData.timeSlot}` },
          { label: "Selected Service:", value: formData.extraService || "None" },
          { label: "Add-ons:", value: addonsList },
            { label: "Total Price:", value: `$${formData.totalPrice}` },
          ])}
        </div>

        <!-- Total Price -->
        <div style="background:#fafafa;border:1px solid #eee;border-radius:8px;padding:20px; flex: 1;">
          <h3 style="margin:0 0 12px;color:#3478b3;">💰 Total</h3>
          <p style="font-size: 20px; font-weight: 700; margin: 0;">$${formData.totalPrice}</p>
        </div>

        <!-- Notes -->
        ${
          formData.notes
            ? `
          <div style="background:#fafafa;border:1px solid #eee;border-radius:8px;padding:20px; flex: 1;">
            <h3 style="margin:0 0 12px;color:#3478b3;">📝 Notes</h3>
            <p style="margin:0;">${formData.notes}</p>
          </div>
          `
            : ""
        }
      </div>

      <!-- Footer -->
      <div style="background:#f3f4f6;color:#555;padding:20px;text-align:center;font-size:13px;">
        <p style="margin:0;">© ${new Date().getFullYear()} <strong>Decent Detailers</strong>. All rights reserved.</p>
      </div>
    </div>
  </body>
  </html>
  `;
};

// ---------------- BOOKING EMAIL TEMPLATE (Admin) ----------------

export const getAdminBookingTemplate = (formData: any) => {
  const addonsList = formatAddons(formData.additionalServices);
  const vehicleTypeInfo = getVehicleTypeName(formData.vehicleType);
  const formattedDate = formData.date
    ? format(new Date(formData.date), "MMMM d, yyyy")
    : "";

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>New Booking</title>
  </head>
  <body style="font-family:'Segoe UI',Arial,sans-serif;background:#f9fafb;padding:30px;margin:0;">
    <div style="max-width:700px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 3px 15px rgba(0,0,0,0.1);">
      
      <!-- Header -->
      <div style="background:#3478b3;padding:25px;text-align:center;color:#fff;">
  <h2 style="margin:0;">🚗 New Booking Received</h2>
  <p style="margin:5px 0 0;font-size:15px;">From ${formData.firstName} ${formData.lastName}</p>
</div>

      
      <!-- Body -->
      <div style="padding:25px;color:#333;">
        ${generateTable([
          { label: "Name:", value: `${formData.firstName} ${formData.lastName}` },
          { label: "Email:", value: formData.email },
          { label: "Phone:", value: formatPhone(formData.phone) },
          { label: "Date & Time:", value: `${formattedDate} - ${formData.timeSlot}` },
          { label: "Vehicle:", value: `${formData.vehicleYear} ${formData.vehicleMake} ${formData.vehicleModel} (${formData.vehicleColor})` },
          { label: "Type:", value: vehicleTypeInfo },
          { label: "Selected Packages:", value: formatServices(formData.selectedPackages || [], formData.vehicleType, formData.vehicleSize) },

          { label: "Selected Service:", value: formData.extraService || "None" },
          { label: "Add-ons:", value: addonsList },
          { label: "Total Price:", value: `$${formData.totalPrice}` },
          { label: "Notes:", value: formData.notes || "N/A" },
        ])}
      </div>
    </div>
  </body>
  </html>
  `;
};

// ---------------- CONTACT FORM EMAIL TEMPLATE (Admin) ----------------

export const getContactFormTemplate = (formData: any) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>New Contact Message</title>
  </head>
  <body style="font-family:'Segoe UI',Arial,sans-serif;background:#f9fafb;padding:30px;margin:0;">
    <div style="max-width:650px;margin:0 auto;background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 3px 15px rgba(0,0,0,0.08);">
      
      <!-- Header -->
      <div style="background:#3478b3;padding:20px;text-align:center;color:#fff;">
        <h2 style="margin:0;">📩 New Contact Form Submission</h2>
      </div>
      
      <!-- Body -->
      <div style="padding:25px;color:#333;">
        <p><strong>${formData.firstName} ${formData.lastName}</strong> has sent you a message.</p>
        
        ${generateTable([
          { label: "Name:", value: `${formData.firstName} ${formData.lastName}` },
          { label: "Email:", value: formData.email },
          { label: "Phone:", value: formatPhone(formData.phone) },
          { label: "Subject:", value: formData.subject },
        ])}
        
        <!-- Message -->
        <div style="margin-top:15px;padding:15px;background:#f9f9f9;border-left:4px solid #3478b3;border-radius:6px;">
          <p style="margin:0;font-style:italic;">"${formData.message}"</p>
        </div>
      </div>
    </div>
  </body>
  </html>
  `;
};
