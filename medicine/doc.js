function getRecommendation() {
    let symptoms = document.getElementById("symptoms").value.toLowerCase();
    let age = parseInt(document.getElementById("age").value);
    let allergies = document.getElementById("allergies").value.toLowerCase();

    let recommendations = [
        { symptoms: ["fever", "cough"], age: "all", medicine: "Paracetamol", sideEffects: "Nausea, Dizziness", recovery: "3-5 days" },
        { symptoms: ["cold", "sneezing"], age: "all", medicine: "Cetirizine", sideEffects: "Drowsiness, Dry mouth", recovery: "2-3 days" },
        { symptoms: ["headache"], age: "all", medicine: "Ibuprofen", sideEffects: "Stomach pain, Drowsiness", recovery: "1-2 days" },
        { symptoms: ["stomach pain"], age: "all", medicine: "Omeprazole", sideEffects: "Constipation, Dry mouth", recovery: "3-6 days" },
        { symptoms: ["sore throat"], age: "all", medicine: "Lozenges", sideEffects: "Mild irritation", recovery: "3-4 days" },
        { symptoms: ["diarrhea"], age: "all", medicine: "ORS & Loperamide", sideEffects: "Bloating, Dizziness", recovery: "2-4 days" },
        { symptoms: ["vomiting"], age: "all", medicine: "Ondansetron", sideEffects: "Fatigue, Headache", recovery: "1-3 days" },
        { symptoms: ["joint pain"], age: "above 40", medicine: "Diclofenac", sideEffects: "Heartburn, Nausea", recovery: "5-7 days" },
        { symptoms: ["acidity"], age: "all", medicine: "Ranitidine", sideEffects: "Drowsiness, Dizziness", recovery: "2-5 days" },
        { symptoms: ["high blood pressure"], age: "above 50", medicine: "Amlodipine", sideEffects: "Swelling, Fatigue", recovery: "Ongoing" },
        { symptoms: ["low blood pressure"], age: "above 50", medicine: "Fludrocortisone", sideEffects: "Dizziness, High BP", recovery: "Ongoing" },
        { symptoms: ["diabetes"], age: "above 30", medicine: "Metformin", sideEffects: "Nausea, Diarrhea", recovery: "Ongoing" },
        { symptoms: ["thyroid"], age: "above 25", medicine: "Levothyroxine", sideEffects: "Hair loss, Sweating", recovery: "Ongoing" },
        { symptoms: ["migraine"], age: "all", medicine: "Sumatriptan", sideEffects: "Tingling, Drowsiness", recovery: "Varies" },
        { symptoms: ["dizziness"], age: "all", medicine: "Meclizine", sideEffects: "Drowsiness, Dry mouth", recovery: "1-2 days" },
        { symptoms: ["muscle pain"], age: "all", medicine: "Paracetamol", sideEffects: "Nausea, Dizziness", recovery: "2-4 days" },
        { symptoms: ["chest pain"], age: "above 40", medicine: "Aspirin", sideEffects: "Bleeding, Stomach pain", recovery: "Immediate Consult Needed" },
        { symptoms: ["skin rash"], age: "all", medicine: "Antihistamine", sideEffects: "Drowsiness, Dry skin", recovery: "3-6 days" },
        { symptoms: ["ear pain"], age: "all", medicine: "Ibuprofen", sideEffects: "Nausea, Stomach pain", recovery: "2-5 days" },
        { symptoms: ["eye redness"], age: "all", medicine: "Eye Drops (Antihistamine)", sideEffects: "Burning sensation", recovery: "1-3 days" }
    ];

    let resultDiv = document.getElementById("result");
    let found = false;

    for (let rec of recommendations) {
        let matchesSymptoms = rec.symptoms.every(symptom => symptoms.includes(symptom));
        let matchesAge = (rec.age === "all") || (rec.age === "above 40" && age >= 40) || 
                         (rec.age === "above 50" && age >= 50) || (rec.age === "above 30" && age >= 30) ||
                         (rec.age === "above 25" && age >= 25);

        if (matchesSymptoms && matchesAge) {
            let medicine = rec.medicine;
            let sideEffects = rec.sideEffects;
            let recovery = rec.recovery;

            if (allergies.includes(medicine.toLowerCase())) {
                resultDiv.innerHTML = `<p style="color:red;">You are allergic to ${medicine}. Please consult a doctor.</p>`;
            } else {
                resultDiv.innerHTML = `<p>Recommended Medicine: <b>${medicine}</b></p>
                                       <p>Side Effects: ${sideEffects}</p>
                                       <p>Expected Recovery: ${recovery}</p>`;
            }
            found = true;
            break;
        }
    }

    if (!found) {
        resultDiv.innerHTML = `<p style="color:red;">No recommendation found. Please consult a doctor.</p>`;
    }
}

