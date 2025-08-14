import React, { useState } from "react";

function Edit({ onCancel, onSubmit }) {
    const [form, setForm] = useState({
        project: "",
        paymentType: "Milestone Payment",
        amount: "",
        percentage: "",
        dueDate: "",
        milestone: "No Milestone",
        notes: "",
    });

    const handleChange = (option) => {
        const { name, value } = option.place;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (option) => {
        option.preventDefault();
        onSubmit(form); // Send form data to parent
    };

    return (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)]">
            <div className="max-w-lg mx-auto bg-white rounded-lg p-6 mt-20">
                <h2 className="text-lg font-semibold mb-2">Edit Payment</h2>
                <p className="text-gray-500 mb-4">
                    Update the payment details.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Project */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Project *</label>
                            <select
                                name="project"
                                value={form.project}
                                onChange={handleChange}
                                className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="Pro-1">Select project</option>
                                <option value="Pro-1">Pro-1-A2Z Tech</option>
                                
                            </select>
                        </div>

                        {/* Payment Type */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Payment Type *</label>
                            <select
                                name="paymentType"
                                value={form.paymentType}
                                onChange={handleChange}
                                className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="Milestone Payment">Milestone Payment</option>
                                <option value="Full Payment">Support</option>
                            </select>
                        </div>
                    </div>
                    {/* Amount & Percentage */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Amount (₹) *</label>
                            <input
                                type="number"
                                name="amount"
                                value={form.amount}
                                onChange={handleChange}
                                placeholder="Enter amount"
                                className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Percentage (%)</label>
                            <input
                                type="number"
                                name="percentage"
                                value={form.percentage}
                                onChange={handleChange}
                                placeholder="Enter percentage"
                                className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Due Date & Milestone */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Due Date *</label>
                            <input
                                type="date"
                                name="dueDate"
                                value={form.dueDate}
                                onChange={handleChange}
                                className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Milestone (Optional)</label>
                            <select
                                name="milestone"
                                value={form.milestone}
                                onChange={handleChange}
                                className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="No Milestone">No Milestone</option>
                                <option value="mil-1">mil-1</option>
                                <option value="mil-2">mil-2</option>
                            </select>
                        </div>
                    </div>

                    {/* Notes */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Notes</label>
                        <textarea
                            name="notes"
                            value={form.notes}
                            onChange={handleChange}
                            placeholder="Add any additional notes..."
                            className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={onCancel}
                            className="px-4 py-2 border rounded hover:bg-gray-100"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Update Payment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Edit;
