import React, { useState } from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 10px;
`;

const SearchBar = styled.View`
  flex-direction: row;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 10px;
`;

const SearchInput = styled.TextInput`
  flex: 1;
  padding: 5px;
  font-size: 16px;
`;

const FilterContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 10px;
`;

const FilterButton = styled.TouchableOpacity`
  background-color: ${(props) => (props.active ? "#000" : "#ccc")};
  padding: 10px;
  border-radius: 10px;
`;

const FilterText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

const ResultContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const ResultText = styled.Text`
  font-size: 16px;
`;

const AddButton = styled.TouchableOpacity`
  background-color: #000;
  padding: 10px;
  border-radius: 50px;
`;

const AddButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
`;

const DATA = [
  {
    id: "1",
    name: "김밥",
    calories: "485kcal",
  },
  {
    id: "2",
    name: "떡볶이",
    calories: "369kcal",
  },
  {
    id: "3",
    name: "치킨",
    calories: "31kcal",
  },
];

const Search = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("전체");
  const navigation = useNavigation(); // 네비게이션 훅 사용

  const filteredData = DATA.filter(
    (item) =>
      item.name.includes(search) &&
      (filter === "전체" || item.calories >= "100kcal")
  );

  return (
    <Container>
      <SearchBar>
        <SearchInput
          placeholder="검색"
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
        <TouchableOpacity onPress={() => setSearch("")}>
          <Text>X</Text>
        </TouchableOpacity>
      </SearchBar>
      <FilterContainer>
        <FilterButton
          active={filter === "전체"}
          onPress={() => setFilter("전체")}
        >
          <FilterText>전체</FilterText>
        </FilterButton>
        <FilterButton
          active={filter === "유저 등록 제외"}
          onPress={() => setFilter("유저 등록 제외")}
        >
          <FilterText>유저 등록 제외</FilterText>
        </FilterButton>
      </FilterContainer>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ResultContainer
            onPress={() =>
              navigation.navigate("FoodDetail", { foodId: item.id })
            }
          >
            <View>
              <ResultText>{item.name}</ResultText>
              <ResultText>{item.calories}</ResultText>
            </View>
            <AddButton>
              <AddButtonText
                onPress={() => {
                  alert("등록 완료!");
                }}
              >
                +
              </AddButtonText>
            </AddButton>
          </ResultContainer>
        )}
      />
    </Container>
  );
};

export default Search;
