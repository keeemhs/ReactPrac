// interface
interface Student {
    name: string;
    grade: number;
    isPassed: boolean;
}

const persons: Student = {
    name: 'keeemhs',
    grade: 4,
    isPassed: true,
};

/* ------------------------------------------------ */
// type
type Gender = 'Female' | 'Male' | 'Boy' | 'Girl';
const gender: Gender = 'Boy';
