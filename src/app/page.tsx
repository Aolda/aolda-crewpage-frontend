'use client';

import Image from "next/image";
import SearchBox from '@/components/molecules/SearchBox';
import LinkSection from '@/components/organisms/LinkSection';

export default function Home() {
  return (
    <main style={{ padding: '20px' }}>
      <h1>아올다 크루 페이지</h1>
      
      {/* 테스트용 SearchBox */}
      <SearchBox 
        value="" 
        onChange={() => {}} 
        onSearch={(q) => console.log(q)} 
        placeholder="크루원 검색..." 
      />

      {/* 테스트용 LinkSection */}
      <LinkSection 
        index={0}
        title="프로젝트"
        description="멋진 프로젝트들을 확인해보세요."
        src="/images/sample.png" // public 폴더에 이미지가 있어야 합니다.
        to="/projects"
      />
    </main>
  );
}
