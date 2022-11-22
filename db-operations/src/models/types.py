from sqlalchemy import String


class Varchar(String):
    def __init__(self, length=12):
        super(Varchar, self).__init__(
            length)
