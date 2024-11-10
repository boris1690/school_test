const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    try {
        const { name, className, section, roll } = req.query;
        const payload = { name, className, section, roll };
        const students = await getAllStudents(payload);
        res.json({ students });
    }   catch (error) {
        res.json({ error: error.message });
    }
});

const handleAddStudent = asyncHandler(async (req, res) => {
    try {
        const message = await addNewStudent(req.body);
    res.json(message);
    }   catch (error) {
        res.json({ error: error.message });
    }

});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const payload = { id, ...req.body };
    const message = await updateStudent(payload);
    res.json(message);

});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const studentDetail = await getStudentDetail(id);
    res.json(studentDetail);
});

const handleStudentStatus = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const payload = { userId: id, status};
    const message = await setStudentStatus(payload);
    res.json(message);

});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
