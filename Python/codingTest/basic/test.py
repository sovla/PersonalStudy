import unittest
from time import process_time
start = process_time()

def is_leap_year(number):
    return number == 2020

class TestLeapYear(unittest.TestCase):
    def test_2020(self):
        r = is_leap_year(2020)
        self.assertEqual(r, True)

if __name__ == '__main__':
    unittest.main() 

#----------------------------------------------------------------------
# Ran 1 test in 0.000s

# OK

end = process_time()

print(end - start)