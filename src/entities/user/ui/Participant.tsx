import { useUserCount } from "../model/useUserCount";
import { useBreakpoint } from "@/shared/hooks/useBreakpoint";

const Participant = () => {
  const { data, isLoading, error } = useUserCount();
  const { isMobile, isTablet } = useBreakpoint();

  if (isLoading) {
    return <p className="text-sm text-gray">불러오는 중...</p>;
  }

  if (error || !data) {
    return <p className="text-red">데이터를 불러올 수 없습니다.</p>;
  }

  const { total_participants, status } = data;

  if (status === 400) {
    return (
      <p className="text-red">
        서버 오류가 발생했습니다. (status: {status})
      </p>
    );
  }

  const textSizeClass = isMobile
    ? "text-sm"
    : isTablet
    ? "text-base"
    : "text-lg";

  return (
    <p className={`${textSizeClass} text-black`}>
      현재 {total_participants.toLocaleString()}명이 참여했습니다.
    </p>
  );
};

export default Participant;


